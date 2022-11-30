import {createSlice} from '@reduxjs/toolkit'
import Project from '../models/project'

const projectSlice = createSlice({
    name: "project",
    initialState: {} as Project,
    reducers: {
        set(state, action) {
            
        }
    }
})

export const projectActions = projectSlice.actions
export default projectSlice.reducer