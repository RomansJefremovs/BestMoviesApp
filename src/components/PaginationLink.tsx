import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Search from '../routes/search';

export default function PaginationLink() {
    return (
      <MemoryRouter initialEntries={['/search']} initialIndex={0}>
        <Routes>
          <Route path="*" element={<Search />} />
        </Routes>
      </MemoryRouter>
    );
  }