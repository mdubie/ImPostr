import React from 'react';
import moment from 'moment';

const PostQueueRemovedEntry = ({ post, requestRemove, index }) => (
  <div className="PQEContainer">
    <div
      className="PQEAvatar"
      style={{"backgroundImage": "url('https://pbs.twimg.com/profile_images/739532954431426562/6_o9x8It_normal.jpg')" }}
    >
    </div>
    <div className="PostQueueEntry">
    {`${post.message} will NOT be posted anymore on ${post.platform} at ${moment(post.expires).fromNow()}`}
      <button
        type="button"
        className="btn btn-link PQERemoveButton"
        onClick={() => { requestRemove(post, index); }}
      >Add Back</button>
    </div>
  </div>
);

export default PostQueueRemovedEntry;
