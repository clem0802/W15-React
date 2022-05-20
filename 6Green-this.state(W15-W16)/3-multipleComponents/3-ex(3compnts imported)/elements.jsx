export const CustomButton = (props) => {
    return (
     <button onClick={props.handler}>
      {props.content}
     </button>
    );
}
   
export const CustomImage = (props) => {
    return (
     <img 
      src={props.src}
      alt={props.alt}
     />
    );
}
   
export const CustomHeader = (props) => {
    return (
     <p>
      <strong>{props.content}</strong>
     </p>
    );
}