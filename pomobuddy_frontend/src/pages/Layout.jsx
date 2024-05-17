import Timer from "../components/Timer";
import TodoList from "../components/TodoList";

const Layout = () => {
  return (
    <div>
      <div className="bg-white">
        <Timer />
        <TodoList />
      </div>
      <div>apples</div>
    </div>
  );
};

export default Layout;
