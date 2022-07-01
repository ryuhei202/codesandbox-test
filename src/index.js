const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する。
  const inputText = document.querySelector("#add-text").value;

  document.querySelector("#add-text").value = "";

  createIncompleteList(inputText);
};

document
  .querySelector("#add-button")
  .addEventListener("click", () => onClickAdd());

//未完了リストから指定の要素を消去する関数
const deleteFromIncompleteList = (target) => {
  document.querySelector("#incomplete-ul").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (cometext) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ生成

  const p = document.createElement("p");
  p.innerText = cometext;

  //完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親divを消去
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    //todoテキスト内容を取得
    const text = addTarget.firstElementChild.innerText;
    //divを初期化
    addTarget.textContent = null;
    //pタグを生成
    const newP = document.createElement("p");
    newP.innerText = text;

    //button生成
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      const deleteTarget = backbutton.parentNode;
      document.querySelector("#complete-ul").removeChild(deleteTarget);

      const backtext = backbutton.parentNode.firstElementChild.innerText;
      createIncompleteList(backtext);
    });

    //divタグ内に各要素を配置
    addTarget.appendChild(newP);
    addTarget.appendChild(backbutton);

    //完了リストに追加
    document.querySelector("#complete-ul").appendChild(addTarget);
  });

  //削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  console.log(deleteButton);
  deleteButton.addEventListener("click", () => {
    //押された消去ボタンの親divを削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設置
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.querySelector("#incomplete-ul").appendChild(div);
};
