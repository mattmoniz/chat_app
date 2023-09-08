import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from './components/ChatFeed'
import LoginForm from "./components/LoginForm";

const App = () => {
  if (!localStorage.getItem('username'))
  return <LoginForm />
  return (
    <ChatEngine
      height="100vh"
      projectID="8d977bd6-1509-43c9-ac23-31e35e5235d2"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
