// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package db

const TableNameContext = "Context"

// Context mapped from table <Context>
type Context struct {
	ID                       int64  `gorm:"column:id;primaryKey" json:"-"`
	TypeID                   int64  `gorm:"column:type_id;not null" json:"-"`
	Name                     string `gorm:"column:name;not null" json:"-"`
	ExternalID               string `gorm:"column:external_id;not null" json:"-"`
	CreateTimeSinceEpoch     int32  `gorm:"column:create_time_since_epoch;not null" json:"-"`
	LastUpdateTimeSinceEpoch int32  `gorm:"column:last_update_time_since_epoch;not null" json:"-"`
}

// TableName Context's table name
func (*Context) TableName() string {
	return TableNameContext
}
