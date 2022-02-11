let item = [{ name: "item1", price: 999999, photo: "https://vn-live-01.slatic.net/p/8e7acb6b4c97d6b7777b536e4f566639.jpg" },
{ name: "item2", price: 88888, photo: "https://assets.ajio.com/medias/sys_master/root/hc4/h09/13018715553822/-288Wx360H-460342492-blue-MODEL.jpg" },
{ name: "item3", price: 77777, photo: "https://assets.ajio.com/medias/sys_master/root/hc4/h09/13018715553822/-288Wx360H-460342492-blue-MODEL.jpg" },
]
let itemBox=document.getElementsByClassName("items");

for(let i=0;i<item.length;i++){
    let nameLable=document.createElement("h1");
    let JsonLable=document.createElement("h1");
    let priceLable=document.createElement("p");

    let photo=document.createElement("img");

    let itemDiv=document.createElement("div");
        itemDiv.className="itemBox"


    nameLable.innerHTML=item[i].name;
    priceLable.innerHTML=item[i].price;
    photo.src=item[i].photo;
    JsonLable.innerHTML=JSON.stringify(item[i])
    itemDiv.appendChild(nameLable);
    itemDiv.appendChild(priceLable);
    itemDiv.appendChild(photo);
    itemDiv.appendChild(JsonLable);
    itemBox[0].appendChild(itemDiv);
}
