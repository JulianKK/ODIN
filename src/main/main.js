import path from 'path'
import url from 'url'
import { app, BrowserWindow, Menu } from 'electron'
import settings from 'electron-settings'
import { K, noop } from '../shared/combinators'
import { buildFromTemplate } from '../main/menu'

const on = emitter => ([event, handler]) => emitter.on(event, handler)

let mainWindow

const createWindow = name => {
  const bounds = settings.get(`windowState.${name}`) || { width: 800, height: 600 }

  const options = {
    ...bounds,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  }

  mainWindow = K(new BrowserWindow(options))(window => {
    // hot deployment in development mode
    const hotDeployment = () =>
      process.defaultApp ||
      /[\\/]electron-prebuilt[\\/]/.test(process.execPath) ||
      /[\\/]electron[\\/]/.test(process.execPath)

    const devServer = () => process.argv.indexOf('--noDevServer') === -1

    const indexURL = (hotDeployment() && devServer())
      ? url.format({
        protocol: 'http:',
        host: 'localhost:8080',
        pathname: 'index.html',
        slashes: true
      })
      : url.format({
        protocol: 'file:',
        pathname: path.join(app.getAppPath(), 'dist', 'index.html'),
        slashes: true
      })

    window.loadURL(indexURL)
    window.on('close', () => (mainWindow = null))
    window.once('ready-to-show', () => window.show())

    // track and store window size and position:
    ;['resize', 'move', 'close'].forEach(event => window.on(event, () => {
      const bounds = K(window.getBounds())(bounds => {
        // NOTE: setting fullscreen option to false disables fullscreen toggle.
        if (window.isFullScreen()) bounds.fullscreen = true
      })

      settings.set(`windowState.${name}`, bounds)
    }))

    Menu.setApplicationMenu(buildFromTemplate())
  })
}

;(() => {
  const quit = process.platform !== 'darwin' ? app.quit : noop
  const activate = mainWindow === null ? () => createWindow('main') : noop

  Object.entries({
    'ready': createWindow,
    'window-all-closed': quit,
    'activate': activate
  }).forEach(on(app))
})()
