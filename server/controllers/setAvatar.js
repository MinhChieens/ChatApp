const User = require("../model/useModel");
const bcrypt = require("bcrypt");

const setAvatar = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const avatarImage = req.body.image;
    if (!userId || !avatarImage) {
      return res
        .status(400)
        .json({ error: "User ID or avatar image data is missing." });
    }

    const userData = await User.findByIdAndUpdate(userId, {
      isAvatarImageSet: true,
      avatarImage,
    });
    return res.json({
      isSet: userData.isAvatarImageSet,
      image: userData.avatarImage,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = setAvatar;
