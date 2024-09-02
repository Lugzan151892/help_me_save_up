import { createSlice } from "@reduxjs/toolkit";

const initialState: { user: null | string; testData: string } = {
	user: null,
	testData: "test",
};

export const testSlice = createSlice({
	name: "test",
	initialState,
	reducers: {
		user(state) {
			state.user = "Denis";
		},
		test(state) {
			state.testData = "changed test";
		},
	},
});

export const { user, test } = testSlice.actions;

export default testSlice.reducer;
