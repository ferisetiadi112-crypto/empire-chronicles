warn("Empire Chronicles v0.1 first playable scenario loaded.");

{
  let cmpGUIInterface = Engine.QueryInterface(SYSTEM_ENTITY, IID_GuiInterface);
  cmpGUIInterface.PushNotification({
    "players": [1],
    "message": "Empire Chronicles v0.1 loaded: 20 population | Technology I | Settlement",
    "translateMessage": false
  });
}
