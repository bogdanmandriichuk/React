import React, {useEffect, useMemo, useRef, useState} from "react";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPagesCount} from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";



function Posts() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "Description"},
        {id: 2, title: "Javascript 2", body: "Description"},
        {id: 3, title: "Javascript 3", body: "Description"},
        {id: 4, title: "Javascript 4", body: "Description"}
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query)




    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })
    useEffect(() => {

        fetchPosts(limit, page)
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }

    return (
        <div className="App">
            <button onClick={fetchPosts}>get posts</button>
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                New post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}/>
            {postError &&
                <h1>Error ${postError}</h1>}
            {isPostLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPost} title='Post list 1'/>
            }


            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
        </div>
    );
}

export default Posts;