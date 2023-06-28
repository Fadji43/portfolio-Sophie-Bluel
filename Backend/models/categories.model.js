
module.exports = (sequelize, worksTypes) => {
	const Categories = sequelize.define(
		"categories",
		{
		name: {
			type: worksTypes.STRING,
			allowNull: false,
			unique: true,
			},
		},
		{timestamps: false}
	)
	return Categories
}
