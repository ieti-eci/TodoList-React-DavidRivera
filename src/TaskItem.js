export const TaskItem = ({isChecked, taskName, onTaskChange}) => {
    
    const styleOfTheComponent = {
        textDecoration: isChecked ? "line-through" : "",
    };
    return (
        <li>
          <input checked={isChecked} type="checkbox" />
          <span style={styleOfTheComponent}>{taskName}</span>
        </li>
    );
};