// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package db

const TableNameEventPath = "EventPath"

// EventPath mapped from table <EventPath>
type EventPath struct {
	EventID     int64  `gorm:"column:event_id;not null" json:"-"`
	IsIndexStep int32  `gorm:"column:is_index_step;not null" json:"-"`
	StepIndex   int32  `gorm:"column:step_index;not null" json:"-"`
	StepKey     string `gorm:"column:step_key;not null" json:"-"`
}

// TableName EventPath's table name
func (*EventPath) TableName() string {
	return TableNameEventPath
}
