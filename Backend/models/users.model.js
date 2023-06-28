
module.exports = (sequelize, worksTypes) => {
	const Users = sequelize.define(
		"users",
		{
		email: {
			type: worksTypes.STRING,
			allowNull: false,
			unique: true
			},
		password: {
			type: worksTypes.STRING,
			allowNull: false
			}
		},
		{timestamps:false}
	)
	return Users
}
