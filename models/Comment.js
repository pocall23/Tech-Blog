const { SEquelize, Model, DataTypes, DATE } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement:true,
            primaryKey:true

        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        post_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: "post",
                key: "id"
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id"
            }
        }
    },
    {
        sequelize,

        timestamps: true,
        underscored: true,
        freezeTableName: true,
        updatedAt: false,
        modelName: "comment"

    }
);

module.exports = Comment;