import { createSlice } from "@reduxjs/toolkit";

const paginatedPostsSlice = createSlice({
  name: "paginatedPosts",
  initialState: {
    currentPage: 1,
    postsPerPage: 10,
  },
  reducers: {
    loadMorePosts: (state) => {
      state.currentPage += 1;
    },
  },
});

export const { loadMorePosts } = paginatedPostsSlice.actions;
export default paginatedPostsSlice.reducer;
