import { STORIES_ADD } from '../actions/story'

const INIITIAL_STATE = {
  stories: [],
  error: null
};

const applyAddStories = (state, action) => ({
  stories: action.stories,
  error: null
})

const applyFetchErrorStories = (state, action) => ({
  stories: [],
  error: action.error
})

const storyReducer = (state = INIITIAL_STATE, action) => {
  switch(action.type) {
    case STORIES_ADD: return applyAddStories(state, action)
    case STORIES_FETCH_ERROR: return applyFetchErrorStories(state, action)
    default: return state
  }
}

export default storyReducer