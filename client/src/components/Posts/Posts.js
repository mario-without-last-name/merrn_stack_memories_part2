import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import useStyles from './styles';
import Post from './Post/Post';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  // console.log(posts);
  
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post.id} item xs={12} sm={6}>
            <Post post={post} setCurrentId={setCurrentId}/> {/* Props Drilling -> Keep on passing props through children after children, a problem solved by redux */}
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default Posts