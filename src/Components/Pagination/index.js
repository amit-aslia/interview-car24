import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../reducer/paginationSlice";
import { loadMorePosts } from "../../reducer/paginatedPostSlice";
import "./styles.css";

const Pagination = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.posts.posts);
  const { currentPage, postsPerPage } = useSelector(
    (state) => state.paginatedPosts
  );

  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMorePosts());
  };

  const slicedPosts = allPosts.slice(0, currentPage * postsPerPage);

  const renderList = ({ id, title }) => {
    return (
      <div className="listContainer" key={id}>
        {id} {title}
      </div>
    );
  };

  const renderContent = () => {
    const content = <div>{slicedPosts.map(renderList)}</div>;
    return content;
  };

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <>
          <h1>Post List</h1>
          {renderContent()}
          {allPosts.length > slicedPosts.length && (
            <div className="button" onClick={handleLoadMore}>
              Load More
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Pagination;
