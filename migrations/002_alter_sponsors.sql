-- Add new columns to sponsors table
ALTER TABLE sponsors
ADD COLUMN IF NOT EXISTS status VARCHAR(50) NOT NULL DEFAULT 'pending',
ADD COLUMN IF NOT EXISTS assigned_to INTEGER REFERENCES team_members(id),
ADD COLUMN IF NOT EXISTS notes TEXT,
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;

-- Add status constraint
ALTER TABLE sponsors
DROP CONSTRAINT IF EXISTS check_status;

ALTER TABLE sponsors
ADD CONSTRAINT check_status
CHECK (status IN ('pending', 'in_progress', 'closed', 'lost'));

-- Create indexes if they don't exist
CREATE INDEX IF NOT EXISTS idx_sponsors_status ON sponsors(status);
CREATE INDEX IF NOT EXISTS idx_sponsors_assigned_to ON sponsors(assigned_to);
CREATE INDEX IF NOT EXISTS idx_sponsors_created_at ON sponsors(created_at); 