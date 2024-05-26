import React, { useState } from 'react';
import styled from 'styled-components';
import Picker from 'emoji-picker-react';
import { IoMdSend } from 'react-icons/io';
import { BsEmoijSm } from 'react-icons/bs';
import { BsEmojiSmileFill } from 'react-icons/bs';
const ChatInput = ({ handleSendMsg }) => {
   const [showEmoji, setShowEmoji] = useState(false);
   const [msg, setMsg] = useState('');

   const handleEmojiHideShow = () => {
      setShowEmoji(!showEmoji);
   };
   const handleChatting = (e) => {
      setMsg(e.target.value);
      setShowEmoji(false);
   };
   const handleEmojiClick = async (emojiObject) => {
      console.log('msg emoji clicked', msg);
      let message = msg;
      message += emojiObject.emoji;
      setMsg(message);
   };

   const sendMsg = async (e) => {
      e.preventDefault();
      if (msg.length >= 0) {
         handleSendMsg(msg);
         setMsg('');
      }
   };
   return (
      <Container>
         <div className="button-container">
            <div className="emoji">
               <BsEmojiSmileFill onClick={handleEmojiHideShow} />
               {showEmoji && <Picker className="showPicker" onEmojiClick={handleEmojiClick} />}
            </div>
         </div>
         <form className="input-container" onSubmit={(e) => sendMsg(e)}>
            <input
               type="text"
               placeholder="type your message here"
               value={msg}
               onChange={handleChatting}
            >
               {console.log(msg)}
            </input>
            <button className="submit">
               <IoMdSend on></IoMdSend>
            </button>
         </form>
      </Container>
   );
};
const Container = styled.div`
   display: grid;
   grid-template-columns: 5% 95%;
   align-items: center;
   background-color: #080420;
   padding: 0 2rem;
   padding-bottom: 0.3rem;
   .button-container {
      display: flex;
      align-items: center;
      color: white;
      gap: 1rem;
      .emoji {
         position: relative;
         cursor: pointer;
         svg {
            font-size: 1.5rem;
            color: #fff000c8;
         }
         .showPicker {
            position: absolute;
            top: -460px;
            z-index: 1000;
         }
      }
   }
   .input-container {
      width: 100%;
      border-radius: 2rem;
      display: flex;
      align-content: center;
      gap: 2rem;
      background-color: #ffffff34;
      input {
        
         width: 90%;
        
         background-color: transparent;
         border: none;
         color: white;
         padding-left: 1rem;
         font-size: 1.2rem;
         &::selection {
            background-color: #9a86f3;
         }
         &:focus {
            outline: none;
         }
      }
      button {
         padding: 0.3rem 2rem;
         border-radius: 2rem;
         display: flex;
         justify-content: center;
         align-items: center;
         background-color: #9a86f3;
         border: none;
         cursor: pointer;
         @media screen and (min-width: 720px) and (max-width: 1080px) {
            padding: 0.3rem 1rem;
            svg {
              font-size: 1rem;
            }
          }
          svg {
            font-size: 2rem;
            color: white;
          }
        }   
      }
   }
`;
export default ChatInput;
