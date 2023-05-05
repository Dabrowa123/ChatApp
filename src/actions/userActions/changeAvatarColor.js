export const changeAvatarColor = (id, avatarColor) => ({
  type: "CHANGE_AVATAR_COLOR",
  payload: {
    id,
    avatarColor,
  },
});
