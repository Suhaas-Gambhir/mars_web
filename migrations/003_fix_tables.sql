-- 1. First create team_members table
CREATE TABLE IF NOT EXISTS team_members (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  role VARCHAR(100) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Add new columns to existing sponsors table
ALTER TABLE sponsors
ADD COLUMN IF NOT EXISTS status VARCHAR(50) NOT NULL DEFAULT 'pending',
ADD COLUMN IF NOT EXISTS notes TEXT,
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;

-- 3. Add assigned_to column after team_members table exists
ALTER TABLE sponsors
ADD COLUMN IF NOT EXISTS assigned_to INTEGER;

-- 4. Add foreign key constraint
ALTER TABLE sponsors
ADD CONSTRAINT fk_sponsors_team_members
FOREIGN KEY (assigned_to) REFERENCES team_members(id);

-- 5. Add status constraint
ALTER TABLE sponsors
DROP CONSTRAINT IF EXISTS check_status;

ALTER TABLE sponsors
ADD CONSTRAINT check_status
CHECK (status IN ('pending', 'in_progress', 'closed', 'lost'));

-- 6. Create indexes
CREATE INDEX IF NOT EXISTS idx_sponsors_status ON sponsors(status);
CREATE INDEX IF NOT EXISTS idx_sponsors_assigned_to ON sponsors(assigned_to);
CREATE INDEX IF NOT EXISTS idx_sponsors_created_at ON sponsors(created_at);

-- 7. Create contact_messages table if it doesn't exist
CREATE TABLE IF NOT EXISTS contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at); 