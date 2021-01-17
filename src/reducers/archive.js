import { STORY_ARCHIVE } from '../constants/actionTypes'

const INITIAL_STATE = []

const appyArchiveStory = (state, action) => {
  return [...state, action.id]
}

const archiveReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case STORY_ARCHIVE: return appyArchiveStory(state, action)
    default: return state
  }
}

export default archiveReducer