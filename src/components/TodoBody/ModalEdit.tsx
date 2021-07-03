import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/hoock';
import CloseIcon from '../../img/close.png'
import { changeModalStatus, editText, editTitle } from '../../store/reducers/TodoSlice';

interface ModalStyleType{
    children?: any
    scale?: string
    inValue: string
    textValue:string
    idCard:number
}


const Modal = styled.div<ModalStyleType>`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(${props => props.scale});
  border-radius: 30px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(1, 214, 253);
  z-index: 3;
  border: rgb(1, 214, 253) 1px solid;
  transition: 0.5s;
  & textarea{
    display: block;
    margin-top: 15px;
    width: 100%;
    height: 80px;
    padding: 10px;
    resize: none;
    border-radius: 15px;
    font-size: 16px;
    outline: none;
    border: none;
  }
  & input{
    outline: none;
    margin-top: 30px;
    width: 100%;
    height: 30px;
    padding: 5px 10px;
    border-radius: 10px;
    display: block;
    border: none;
  }
  & button{
    border: none;
    width: 60%;
    height: 30px;
    border-radius: 10px;
    font-size: 18px;
  }
  & div{
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 30px;
  }
  & img{
    width: 100%;
    display: block;
  }
`


export const ModalEdit = (props:ModalStyleType) => {
    const dispatch = useAppDispatch()
        let changeTitle = (event:React.ChangeEvent<HTMLInputElement>)=>{
        let Title = event.target.value
            dispatch(editTitle({id: props.idCard, title: Title}))
        }
        let changeText = (event:React.ChangeEvent<HTMLTextAreaElement>) =>{
        let text = event.target.value
            dispatch(editText({id:props.idCard, text:text}))
        }
        let changeEditStatus = (id:number)=>{
        dispatch(changeModalStatus(id))
        }
    return (
        <Modal {...props}>
            <div onClick={()=> changeEditStatus(props.idCard)}>
                <img src={CloseIcon} alt="close"/>
            </div>
            <input type="text" value={props.inValue} onChange={changeTitle} />
            <textarea value={props.textValue} onChange={changeText}></textarea>
    </Modal>
    );
};

