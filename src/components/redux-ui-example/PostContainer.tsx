import React, { useEffect, useState } from 'react';
import { postAPI } from "../../services/PostService";
import PostItem from "./PostItem";
import { IPost } from "../../models/IPost";
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { CounterActions } from '../../store/reducers/CounterSlice';

const PostContainer = () => {
    const { count } = useAppSelector((state) => state.CounterReducer);
    const { increment, decrement } = CounterActions;
    const dispatch = useAppDispatch();

    const limit = 10;
    const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit,
        // {
        //     pollingInterval: 1000,
        //     skip: 'examplestring'.length > 600, //condition when request will be ignored,
        // }
    );
    const [createPost, { error: createError, isLoading: createIsLoading }] = postAPI.useCreatePostMutation();
    const [updatePost, { error: updateError, isLoading: updateIsLoading }] = postAPI.useUpdatePostMutation();
    const [deletePost, { error: deleteError, isLoading: deleteIsLoading }] = postAPI.useDeletePostMutation();

    const handleCreate = async () => {
        const title = prompt()
        await createPost({ title, body: title } as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button className={styles.button} onClick={() => dispatch(increment(1))}>
                increment
            </button>
            <br />
            <button className={styles.button} onClick={() => dispatch(decrement(1))}>
                decrement
            </button>
            <div className={styles.postList}>
                <button onClick={handleCreate}>Add new post</button>
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>En error occured while loading data</h1>}
                {posts && posts.map(post =>
                    <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post} />
                )}
            </div>
        </div>
    );
};

export default PostContainer;
