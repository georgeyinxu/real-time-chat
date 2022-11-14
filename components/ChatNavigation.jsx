const ChatNavigation = () => (
<div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      <li><a>Room 1</a></li>
      <li><a>Room 2</a></li>
    </ul>
  </div>
</div>
)

export default ChatNavigation;