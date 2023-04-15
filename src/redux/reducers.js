import { SET_GAME } from './actions'

const initialState = [
  {
    id: 100031911,
    title: '7 Days to Die',
    highlightsSupported: false,
    fullyOptimized: true,
    steamUrl: 'https://store.steampowered.com/app/251570',
    publisher: 'The Fun Pimps Entertainment LLC',
    genre: 'Action,Adventure,Indie,',
    status: 'AVAILABLE'
  },
  {
    id: 100251911,
    title: 'A Plague Tale: Innocence',
    highlightsSupported: false,
    fullyOptimized: false,
    steamUrl: 'https://store.steampowered.com/app/752590',
    publisher: 'Focus Home Interactive',
    genre: 'Action,',
    status: 'AVAILABLE'
  },
  {
    id: 100129011,
    title: 'Absolver',
    highlightsSupported: true,
    fullyOptimized: false,
    steamUrl: 'https://store.steampowered.com/app/473690',
    publisher: 'Devolver Digital',
    genre: 'Action,Adventure,Indie,',
    status: 'AVAILABLE'
  },
  {
    id: 100184111,
    title: 'ACE COMBAT™ 7: SKIES UNKNOWN',
    highlightsSupported: false,
    fullyOptimized: false,
    steamUrl: 'https://store.steampowered.com/app/502500',
    publisher: 'BANDAI NAMCO Studio Inc.',
    genre: 'Action,Simulation,',
    status: 'AVAILABLE'
  },
  {
    id: 100350211,
    title: 'Age of Wonders III',
    highlightsSupported: false,
    fullyOptimized: false,
    steamUrl: 'https://store.steampowered.com/app/226840',
    publisher: 'Paradox Interactive',
    genre: 'Role Playing,Strategy,',
    status: 'AVAILABLE'
  },
  {
    id: 100361111,
    title: 'Age of Wonders: Planetfall',
    highlightsSupported: false,
    fullyOptimized: false,
    steamUrl: 'https://store.steampowered.com/app/718850',
    publisher: 'Paradox Interactive',
    genre: 'Strategy,',
    status: 'AVAILABLE'
  },
  {
    id: 100365811,
    title: 'AI: The Somnium Files',
    highlightsSupported: false,
    fullyOptimized: false,
    steamUrl: 'https://store.steampowered.com/app/948740',
    publisher: 'Spike Chunsoft Co., Ltd.',
    genre: 'Adventure,',
    status: 'AVAILABLE'
  },
  {
    id: 18107911,
    title: 'Aion™',
    highlightsSupported: false,
    fullyOptimized: false,
    steamUrl: '',
    publisher: 'NCSOFT',
    genre: 'Free To Play,Massively Multiplayer Online,Role Playing,',
    status: 'AVAILABLE'
  },
  {
    id: 100005211,
    title: 'Albino Lullaby: Episode 1',
    highlightsSupported: false,
    fullyOptimized: false,
    steamUrl: 'https://store.steampowered.com/app/355860',
    publisher: 'Ape Law',
    genre: 'Action,Adventure,Indie,',
    status: 'AVAILABLE'
  },
  {
    id: 100334011,
    title: 'Albion Online',
    highlightsSupported: false,
    fullyOptimized: false,
    steamUrl: 'https://store.steampowered.com/app/761890',
    publisher: 'Sandbox Interactive GmbH',
    genre: 'Massively Multiplayer Online,Role Playing,',
    status: 'AVAILABLE'
  },
  {
    id: 100313411,
    title: 'Amazing Cultivation Simulator / 了不起的修仙模拟器',
    highlightsSupported: false,
    fullyOptimized: false,
    steamUrl: 'https://store.steampowered.com/app/955900',
    publisher: 'Gamera Game',
    genre: 'Indie,Role Playing,Simulation,Strategy,',
    status: 'AVAILABLE'
  },
  {
    id: 17948311,
    title: 'American Truck Simulator',
    highlightsSupported: false,
    fullyOptimized: false,
    steamUrl: 'https://store.steampowered.com/app/270880',
    publisher: 'SCS Software',
    genre: 'Indie,Simulation,',
    status: 'AVAILABLE'
  },
  {
    id: 100220311,
    title: 'Ancestors Legacy',
    highlightsSupported: false,
    fullyOptimized: false,
    steamUrl: 'https://store.steampowered.com/app/620590',
    publisher: '1C Company',
    genre: 'Strategy,',
    status: 'AVAILABLE'
  },
  {
    id: 100261311,
    title: 'Anno 1800™',
    highlightsSupported: false,
    fullyOptimized: false,
    steamUrl: '',
    publisher: 'Ubisoft',
    genre: 'Strategy,Simulation,',
    status: 'AVAILABLE'
  }
]

function userReducer (state = initialState, action) {
  switch (action.type) {
    case SET_GAME:
      return { ...state, name: action.payload }

    default:
      return state
  }
}

export default userReducer
