import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db";

class User extends Model {
   public id!: string;
   public fullName!: string;
   public email!: string;
   public createdAt!: Date;
   public updatedAt!: Date;
}

User.init(
   {
      fullName: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
      },
   },
   {
      sequelize,
      tableName: "Users",
      modelName: "users",
      underscored: true,
   }
);

export default User;
