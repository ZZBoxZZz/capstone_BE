const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return binh_luan.init(sequelize, DataTypes);
}

class binh_luan extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    binh_luan_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nguoi_dung_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'hinh_anh',
        key: 'nguoi_dung_id'
      }
    },
    hinh_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ngay_binh_luan: {
      type: DataTypes.DATE,
      allowNull: true
    },
    noi_dung: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'binh_luan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "binh_luan_id" },
        ]
      },
      {
        name: "nguoi_dung_id",
        using: "BTREE",
        fields: [
          { name: "nguoi_dung_id" },
        ]
      },
    ]
  });
  }
}
