
module.exports = (sequelize, worksTypes) => {
	const Works = sequelize.define(
		"works",
		{
		title: {
			type: worksTypes.STRING,
			allowNull: false
			},
		imageUrl: {
			type: worksTypes.STRING,
			allowNull: false
			}
		},
		{timestamps:false}
	)
	return Works
}
