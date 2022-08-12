// eslint-disable-next-line consistent-return
export default (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) return res.status(400).json({ error: error.message });

  next();
};
