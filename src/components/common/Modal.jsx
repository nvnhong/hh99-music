import useInput from "../hooks/useInput";
import styled from 'styled-components';
import * as St from '../styles/Styles';

export default function Modal() {
    const [titleInput, titleHandleChange] = useInput('');
    const [youtubeidInput, youtubeidHandleChange] = useInput('');
    const [contentInput, contentHandleChange] = useInput('');
  return (
    <>
      <div>
        <div>
          제목
          <br />
          <input
          type = "text"
          value = {titleInput}
          onChange = {titleHandleChange}
           />
        </div>
        <div>
            유튜브 주소
            <br />
            https://youtube.be/<input
            type = "text"
            value = {youtubeidInput}
            onChange = {youtubeidHandleChange}
             />
        </div>
        <div>
            추천사유
            <br />
            <input
            type = "text"
            value = {contentInput}
            onChange = {contentHandleChange}
            placeholder = "왜 이 노래를 추천하시나요?"
             />
        </div>
        <button>등록</button>
      </div>
    </>
  );
}
