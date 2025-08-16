import { toast } from "react-toastify";

const getStoredReadList = () =>{
  const storedListStr = localStorage.getItem('read-list');
  if(storedListStr){
    const storedList = JSON.parse(storedListStr)
    return storedList;
  }
  else{
    return [];
  }
}

const addToStoredReadList = (id) =>{
   const storedList = getStoredReadList();
   if(storedList.includes(id)){
    console.log(id, 'already existed')
   }
   else{
    storedList.push(id)
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('read-list', storedListStr);
    toast.success('Book Added To Read List', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
   }
}
const addToStoredWishList = (id) =>{
   const storedWishList = getStoredReadList();
   if(storedWishList.includes(id)){
    console.log(id, 'already existed')
   }
   else{
    storedWishList.push(id)
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem('read-list', storedWishListStr);
   }
}



export { addToStoredReadList, getStoredReadList ,addToStoredWishList }