import ActionType from "./ActionType";

export const handleAddFriend = value => ({
  type : ActionType.DATA_USER,
  value
});

export const handleChangeKontak = value => ({
  type : ActionType.KONTAK_USER,
  value
})
