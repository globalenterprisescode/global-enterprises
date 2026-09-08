-- Allow anonymous ad visitors to submit enquiries from public landing pages.
CREATE POLICY "Public landing pages can create enquiries"
  ON enquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);
