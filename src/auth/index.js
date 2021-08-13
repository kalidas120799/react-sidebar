export const checkLogin=()=>{
  var token=localStorage.getItem("token")
  if(token===null) return false
  return true
}