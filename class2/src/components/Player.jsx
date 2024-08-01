import { useState } from "react";

function Player({initialName, symbol, isActive, onChangeName}){
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){

        // 상태값을 이전값을 기반으로 변경하려는 경우 사용해야하는 방식 => 리액트 추천
        // 함수를 사용해야한다 -> 해당 상태값은 항상 최신버전의 값을 가져오도록 보장되어있음
        setIsEditing(editing => !editing);

        if(isEditing){
            onChangeName(symbol,playerName);
        }

        // 상태값을 이전값을 기반으로 변경하려는 경우 옳지않은 방식
        // setIsEditing(!isEditing);

    

    }

    function handleChange(event){
        // event.target은 이벤트가 일어난 대상을 뜻함, 즉 input태그를 의미함
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if(isEditing){
        editablePlayerName =  <input type="text" required defaultValue={playerName} onChange={handleChange}/>;
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
    )
}

export default Player;