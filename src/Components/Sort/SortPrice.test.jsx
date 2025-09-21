import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SortPrice from './SortPrice';

describe('SortPrice component', () => {
  it('renders select with correct options', async () => {
    render(<SortPrice value="none" onChange={() => {}} />);
    
    // Check if the select component is rendered
    expect(screen.getByLabelText(/Sort by Price/i)).toBeInTheDocument();
    
    // Open the dropdown to check options
    const select = screen.getByLabelText(/Sort by Price/i);
    fireEvent.mouseDown(select);
    
    // Now check for the options using more specific queries
    expect(screen.getByRole('option', { name: /None/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /Low to High/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /High to Low/i })).toBeInTheDocument();
  });

  it('calls onChange when option is selected', () => {
    const handleChange = jest.fn();
    render(<SortPrice value="none" onChange={handleChange} />);
    
    // Open the dropdown
    const select = screen.getByRole('combobox');
    fireEvent.mouseDown(select);
    
    // Click the "Low to High" option
    const lowToHighOption = screen.getByRole('option', { name: /Low to High/i });
    fireEvent.click(lowToHighOption);
    
    expect(handleChange).toHaveBeenCalled();
  });
});