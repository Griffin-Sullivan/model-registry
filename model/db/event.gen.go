// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package db

const TableNameEvent = "Event"

// Event mapped from table <Event>
type Event struct {
	ID                     int64 `gorm:"column:id;primaryKey" json:"-"`
	ArtifactID             int64 `gorm:"column:artifact_id;not null" json:"-"`
	ExecutionID            int64 `gorm:"column:execution_id;not null" json:"-"`
	Type                   int32 `gorm:"column:type;not null" json:"-"`
	MillisecondsSinceEpoch int32 `gorm:"column:milliseconds_since_epoch;not null" json:"-"`
}

// TableName Event's table name
func (*Event) TableName() string {
	return TableNameEvent
}
