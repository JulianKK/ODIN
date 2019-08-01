const symbolSetData = () => {
  return [
    {
      'name': 'Units',
      'content': [
        { 'name': 'GROUND TRACK', 'info': 'GRDTRK', 'sidc': 'SFGPUCAA---D---' },
        { 'name': 'AIR DEFENSE MISSILE MEDIUM', 'info': 'GRDTRK.UNT.CBT.ADF.MSL.MDM', 'sidc': 'SFG-UCDMM-' },
        { 'name': 'AVIATION', 'info': 'GRDTRK.UNT.CBT.AVN', 'sidc': 'SFG-UCV---' },
        { 'name': 'FIXED WING', 'info': 'GRDTRK.UNT.CBT.AVN.FIXD', 'sidc': 'SFG-UCVF--' },
        { 'name': 'UNMANNED AIRCRAFT', 'info': 'GRDTRK.UNT.CBT.AVN.UA', 'sidc': 'SFG-UCVU--' },
        { 'name': 'INFANTRY', 'info': 'GRDTRK.UNT.CBT.INF', 'sidc': 'SFG-UCI---' },
        { 'name': 'INFANTRY NAVAL', 'info': 'GRDTRK.UNT.CBT.INF.NAV', 'sidc': 'SFG-UCIN--' },
        { 'name': 'ENGINEER', 'info': 'GRDTRK.UNT.CBT.ENG', 'sidc': 'SFG-UCE---' },
        { 'name': 'ENGINEER COMBAT', 'info': 'GRDTRK.UNT.CBT.AVN.CBT', 'sidc': 'SFG-UCEC--' },
        { 'name': 'FIELD ARTILLERY', 'info': 'GRDTRK.UNT.CBT.FLDART', 'sidc': 'SFG-UCF---' }
      ]
    },
    {
      'name': 'Equipments',
      'content': [
        { 'name': 'GROUND TRACK EQUIPMENT', 'info': 'GRDTRK.EQT', 'sidc': 'SFG-E-----' },
        { 'name': 'MISSILE LAUNCHER', 'info': 'GRDTRK.EQT.WPN.MSLL', 'sidc': 'SFG-EWM---' },
        { 'name': 'RIFLE/AUTOMATIC WEAPON', 'info': 'GRDTRK.EQT.WPN.RIFWPN', 'sidc': 'SFG-EWR---' },
        { 'name': 'MORTAR', 'info': 'GRDTRK.EQT.WPN.MORT', 'sidc': 'SFG-EWOL--' },
        { 'name': 'HOWITZER', 'info': 'GRDTRK.EQT.WPN.HOW', 'sidc': 'SFG-EWH---' },
        { 'name': 'ANTITANK GUN', 'info': 'GRDTRK.EQT.WPN.ATG', 'sidc': 'SFG-EWG---' },
        { 'name': 'GROUND VEHICLE', 'info': 'GRDTRK.EQT.GRDVEH', 'sidc': 'SFG-EV----' },
        { 'name': 'TANK', 'info': 'GRDTRK.EQT.GRDVEH.ARMD.TANK', 'sidc': 'SFG-EVAT--' },
        { 'name': 'ENGINEER VEHICLE', 'info': 'GRDTRK.EQT.GRDVEH.ENGVEH', 'sidc': 'SFG-EVE---' },
        { 'name': 'LASER', 'info': 'GRDTRK.EQT.SPL.LSR', 'sidc': 'SFG-EXL---' }
      ]
    },
    {
      'name': 'Tactical Graphics',
      'content': [
        { 'name': 'DESTROY', 'info': 'TACGRP.TSK.DSTY', 'sidc': 'GFT-D-----' },
        { 'name': 'INTERDICT', 'info': 'TACGRP.TSK.ITDT', 'sidc': 'GFT-I-----' },
        { 'name': 'NEUTRALIZE', 'info': 'TACGRP.TSK.NEUT', 'sidc': 'GFT-N-----' },
        { 'name': 'DATUM', 'info': 'TACGRP.C2GM.GNL.PNT.USW.UH2.DTM', 'sidc': 'GFG-GPUUD-' },
        { 'name': 'SINKER', 'info': 'TACGRP.C2GM.GNL.PNT.USW.UH2.SNK', 'sidc': 'GFG-GPUUS-' },
        { 'name': 'SONOBUOY', 'info': 'TACGRP.C2GM.GNL.PNT.USW.SNBY', 'sidc': 'GFG-GPUY--' },
        { 'name': 'SEARCH', 'info': 'TACGRP.C2GM.GNL.PNT.USW.SRH', 'sidc': 'GFG-GPUS--' },
        { 'name': 'REFERENCE POINT', 'info': 'TACGRP.C2GM.GNL.PNT.REFPNT', 'sidc': 'GFG-GPR---' },
        { 'name': 'GROUND ZERO', 'info': 'TACGRP.C2GM.GNL.PNT.WPN.GRDZRO', 'sidc': 'GFG-GPWG--' },
        { 'name': 'DOWNED AIRCREW PICKUP POINT', 'info': 'TACGRP.C2GM.AVN.PNT.DAPP', 'sidc': 'GFG-APD---' }
      ]
    }
  ]
}

export default symbolSetData
