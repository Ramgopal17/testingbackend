let users = [];
let idCounter = 1;

// CREATE
export const createUser = (req, res) => {
  const user = { id: idCounter++, ...req.body };
  users.push(user);
  res.status(201).json(user);
};

// READ ALL
export const getUsers = (req, res) => {
  res.json(users);
};

// READ ONE
export const getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
};

// UPDATE
export const updateUser = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });
  Object.assign(user, req.body);
  res.json(user);
};

// DELETE
export const deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "User not found" });
  const deletedUser = users.splice(index, 1);
  res.json({ message: "User deleted", user: deletedUser });
};
