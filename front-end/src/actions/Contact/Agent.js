import * as types from '../../constants/Contact/Agent'
export const actGetListAgents =(agents) =>{
    return {
        type: types.GET_LIST_AGENTS,
        agents: agents
    }
}