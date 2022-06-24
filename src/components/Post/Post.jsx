import React, { useState, useContext, useRef, useEffect } from 'react';
import { MainLink, PostWrapper, MainLinkIconsWrapper, IconsContainer, ModalStyle, OverlayStyle, RepostLabel } from './style';
import ReactHashtag from 'react-hashtag';
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';
import { FaRetweet } from 'react-icons/fa';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import Likes from '../posts/likes.jsx';
import CommentIcon from '../posts/CommentIcon';
import ShareIcon from '../posts/ShareIcon';
import UserContext from '../../contexts/usercontext';
import CommentContext from '../../contexts/commentContext';
import CommentsArea from '../posts/CommentsArea';

import Modal from 'react-modal';
Modal.setAppElement('#root');

const Post = ({ publishing, getPosts }) => {
  const { user, token } = useContext(UserContext);
  const textAreaRef = useRef();

  const {
    post_id,
    user_name,
    icon,
    description,
    title_url,
    description_url,
    url,
    image_url,
    tooltipText,
    liked_by_me,
    like_count,
    user_name_repost,
    comment_count
  } = publishing;

  const [editing, setEditing] = useState(false);
  const [descriptionEdit, setDescriptionEdit] = useState(description);
  const [loading, setLoading] = useState(false);
  const [commentsVisible, setCommentsVisible] = useState(false);
  const [comments, setComments] = useState([]);
  const [numberOfComments, setNumberOfComments] = useState(comment_count);
  const navigate = useNavigate();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const [confirmModalText, setConfirmModalText] = useState('')

  function openDeleteModal() {
    setModalText('Are you sure you want to delete this post?');
    setConfirmModalText('Yes, delete')
    setConfirmModalFunction(() => () => handleDelete())
    setIsOpen(true);
  }

  function openRepostModal() {
    console.log("Open")
    setModalText(`Do you want to re-post this link?`)
    setConfirmModalText('Yes, share!')
    setConfirmModalFunction(() => () => handleRepost())
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);

  }

  async function handleRepost() {
    const URL = `${process.env.REACT_APP_API_URL}/repost`

    const headers = {
      authorization: `Bearer ${token}`,
    }
    const data = {
      postId: post_id
    }
    try {
      setLoading(true);
      const response = await axios.post(URL, data, {headers});
      console.log(response.data);
      setLoading(false);
      setIsOpen(false);
      getPosts();
    } catch (error) {
      setLoading(false);
      setIsOpen(false);
      alert(error.message);
    }
    


  }

  const handleEdit = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/timeline/${post_id}`;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const data = {
      description: descriptionEdit,
    };

    try {
      setLoading(true);
      const response = await axios.patch(URL, data, config);
      console.log(response.data);
      setLoading(false);
      getPosts();
    } catch (error) {
      setLoading(false);
      alert(error.message);
    }
    setEditing(!editing);
  };



  const handleDelete = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/timeline/${post_id}`;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      setLoading(true);
      const response = await axios.delete(URL, config);
      console.log(response.data);
      setLoading(false);
      setIsOpen(false);
      getPosts();
    } catch (error) {
      setLoading(false);
      setIsOpen(false);
      alert(error.message);
    }
  };
  const [confirmModalFunction, setConfirmModalFunction] = useState()
  const openEditor = () => {
    setEditing(!editing);
  };

  const growTextArea = (element) => {
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  };

  const handleComments = async () => {
    const URL = `${process.env.REACT_APP_API_URL}/comments/${post_id}`;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = (await axios.get(URL, config)).data;
      return response;
    } catch (error) {
      return [];
    }
  }

  useEffect(() => {
    if (editing) {
      growTextArea(textAreaRef.current);
      textAreaRef.current.focus();
    }
  }, [editing]);


  const display = user_name_repost ? 'flex' : 'none';
  return (
    <>
      <CommentContext.Provider value={{
        handleComments, 
        comments, 
        setComments, 
        commentsVisible,
        numberOfComments, 
        setNumberOfComments,
        postAuthor: user_name
        }}>
        <RepostLabel display = {display} >
          <div className="reposterInfo">
            <FaRetweet />
            <p>Re-posted by <span>{user_name_repost}</span></p>
          </div>
        </RepostLabel>
        <PostWrapper>
        
          {console.log(user_name_repost)};
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Delete Modal"
            className="_"
            overlayClassName="_"
            contentElement={(props, children) => (
              <ModalStyle {...props}>{children}</ModalStyle>
            )}
            overlayElement={(props, contentElement) => (
              <OverlayStyle {...props}>{contentElement}</OverlayStyle>
            )}
          >
            <h1>{modalText}</h1>
            <div className="buttons">
              <button className="white" onClick={closeModal}>
                No, go back
              </button>
              <button className="blue" onClick={confirmModalFunction}>
              {loading ? <ThreeDots color="#fff" /> : confirmModalText}
            </button>
            </div>
          </Modal>
          {user_name === user.name && (
            <div className="icons">
              <BsFillPencilFill onClick={openEditor} size={15} fill={'#FFFFFF'} />
              <BsFillTrashFill
                onClick={() => {
                  openDeleteModal();
                }}
                size={15}
                fill={'#FFFFFF'}
              />
            </div>
          )}
          <div className="imgInfoWrapper">
            <img src={icon} alt="icon" />
            <div className="col">
              <div className="content">
                <span className="user">{user_name}</span>
              </div>
              {editing ? (
                <textarea
                  ref={textAreaRef}
                  style={
                    textAreaRef.current
                      ? { height: textAreaRef.current.scrollHeight }
                      : { height: '30px' }
                  }
                  onFocus={(e) => {
                    e.currentTarget.setSelectionRange(
                      e.currentTarget.value.length,
                      e.currentTarget.value.length,
                    );
                  }}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleEdit();
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      setEditing(false);
                    }
                  }}
                  value={descriptionEdit}
                  onChange={(e) => setDescriptionEdit(e.target.value)}
                  disabled={loading}
                />
              ) : (
                <div className="descriptionContainer">
                  <ReactHashtag
                    renderHashtag={(hashtagValue) => (
                      <div
                        key={hashtagValue + (Math.random() * 100).toString()}
                        className="hashtag"
                        onClick={() => {
                          const hashtagArr = hashtagValue.split('#');
                          const hashtagText = hashtagArr[hashtagArr.length - 1];
                          navigate(`/hashtag/${hashtagText}`);
                        }}
                      >
                        {hashtagValue}
                      </div>
                    )}
                  >
                    {description}
                  </ReactHashtag>
                </div>
              )}
            </div>
          </div>
          <MainLinkIconsWrapper>
              <IconsContainer>
                <div className="likeIcon">
                  <Likes
                    tooltipText={tooltipText}
                    liked={liked_by_me}
                    like_count={like_count}
                    post_id={post_id}
                  />
                </div>
                <div className="iconWrapper"
                  onClick = {async ()=>{
                    const response = await handleComments();
                    setComments({response, post_id});
                    setCommentsVisible(!commentsVisible);
                  }}
                >
                  <CommentIcon
                    comment_count = {numberOfComments}
                  />
                </div>
                <ShareIcon callback={openRepostModal} />
              </IconsContainer>
              <MainLink>
                <a href={url} target="_blank" rel="noreferrer">
                  <div className="texts">
                    <p>{title_url}</p>
                    <span>{description_url}</span>
                    <span className="url">{url}</span>
                  </div>
                  <img src={image_url} className="image-url" alt="icon" />
                </a>
              </MainLink>
            </MainLinkIconsWrapper>
        </PostWrapper>
        <CommentsArea />
      </CommentContext.Provider>
    </>


  );
};

export default Post;
