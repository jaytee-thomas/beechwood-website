'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Plus, Save, X, Calendar, Hash } from 'lucide-react';

type BlogEntry = {
  date: string;
  title: string;
  content: string;
};

type ProductBlogData = {
  [key: string]: BlogEntry[];
};

const products = [
  { slug: 'beacon', name: 'Beacon' },
  { slug: 'i65sports', name: 'i65sports' },
  { slug: 'where2gonashville', name: 'Where2GoNashville' },
  { slug: 'visual-counter', name: 'Visual Counter' },
  { slug: 'clock-work', name: 'Clock Work' },
  { slug: 'beechwood-os', name: 'Beechwood OS' },
];

export default function BlogAdmin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('beacon');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [blogData, setBlogData] = useState<ProductBlogData>({});

  // Load blog data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('beechwood-blog-entries');
    if (saved) {
      setBlogData(JSON.parse(saved));
    }
  }, []);

  // Save blog data to localStorage
  const saveBlogData = (data: ProductBlogData) => {
    localStorage.setItem('beechwood-blog-entries', JSON.stringify(data));
    setBlogData(data);
  };

  // Handle login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password protection (change this!)
    if (password === 'beechwood2026') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  // Add blog entry
  const handleAddEntry = () => {
    if (!title.trim() || !content.trim()) {
      alert('Please fill in both title and content');
      return;
    }

    const newEntry: BlogEntry = {
      date: new Date().toISOString().split('T')[0], // YYYY-MM-DD
      title: title.trim(),
      content: content.trim(),
    };

    const updatedData = { ...blogData };
    if (!updatedData[selectedProduct]) {
      updatedData[selectedProduct] = [];
    }
    updatedData[selectedProduct] = [newEntry, ...updatedData[selectedProduct]];

    saveBlogData(updatedData);
    setTitle('');
    setContent('');
    setShowForm(false);
    
    // Dispatch custom event to notify other windows/tabs
    window.dispatchEvent(new Event('blogUpdated'));
    
    alert('Blog entry added! (Note: This is saved in browser storage. Export to code for permanent storage.)');
  };

  // Delete entry
  const handleDelete = (productSlug: string, index: number) => {
    if (confirm('Delete this entry?')) {
      const updatedData = { ...blogData };
      updatedData[productSlug].splice(index, 1);
      saveBlogData(updatedData);
      
      // Dispatch custom event to notify other windows/tabs
      window.dispatchEvent(new Event('blogUpdated'));
    }
  };

  // Export to code format
  const handleExport = () => {
    const code = JSON.stringify(blogData, null, 2);
    navigator.clipboard.writeText(code);
    alert('Blog data copied to clipboard! Paste this into your product page code.');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a1f] flex items-center justify-center px-4">
        <div className="bg-[#0a0a1f]/50 backdrop-blur-sm border border-beechwood-main/30 rounded-2xl p-8 max-w-md w-full">
          <h1 className="text-3xl font-black text-white mb-6 text-center">
            Blog <span className="text-transparent bg-clip-text bg-gradient-to-r from-beechwood-400 to-beechwood-sage-400">Admin</span>
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-bold">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-beechwood-main/30 rounded-lg text-white focus:outline-none focus:border-beechwood-main"
                placeholder="Enter admin password"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-beechwood-600 to-beechwood-sage-600 text-white rounded-lg font-bold transition-all transform hover:scale-105"
            >
              Login
            </button>
          </form>
          <p className="text-gray-500 text-xs mt-4 text-center">
            Default password: beechwood2026
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a1f] relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-beechwood-main/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-beechwood-sage/20 rounded-full blur-[100px] animate-pulse" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a0a1f]/80 backdrop-blur-xl border-b border-beechwood-main/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-beechwood-sage transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bold">Back to Home</span>
          </Link>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 bg-beechwood-500/10 border border-beechwood-main/30 rounded-lg text-beechwood-sage hover:bg-beechwood-500/20 transition-all"
          >
            <Save className="w-4 h-4" />
            Export to Code
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black text-white mb-4">
              Blog <span className="text-transparent bg-clip-text bg-gradient-to-r from-beechwood-400 to-beechwood-sage-400">Management</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Add and manage development updates for your products
            </p>
          </div>

          {/* Add Entry Button */}
          {!showForm && (
            <div className="text-center mb-12">
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-beechwood-600 to-beechwood-sage-600 text-white rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-beechwood-main/50"
              >
                <Plus className="w-5 h-5" />
                Add New Entry
              </button>
            </div>
          )}

          {/* Add Entry Form */}
          {showForm && (
            <div className="bg-[#0a0a1f]/50 backdrop-blur-sm border border-beechwood-main/30 rounded-2xl p-8 mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black text-white">New Blog Entry</h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Product Selection */}
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-bold">Product</label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-beechwood-main/30 rounded-lg text-white focus:outline-none focus:border-beechwood-main"
                  >
                    {products.map((product) => (
                      <option key={product.slug} value={product.slug} className="bg-[#0a0a1f]">
                        {product.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-bold">
                    Title
                    <span className="text-gray-500 ml-2">({title.length}/100 characters)</span>
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value.slice(0, 100))}
                    placeholder="Enter blog entry title..."
                    className="w-full px-4 py-3 bg-white/5 border border-beechwood-main/30 rounded-lg text-white focus:outline-none focus:border-beechwood-main"
                    maxLength={100}
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-bold">
                    Content
                    <span className="text-gray-500 ml-2">({content.length}/500 characters)</span>
                  </label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value.slice(0, 500))}
                    placeholder="Describe what you accomplished, what's working, and what's next..."
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-beechwood-main/30 rounded-lg text-white focus:outline-none focus:border-beechwood-main resize-none"
                    maxLength={500}
                  />
                </div>

                {/* Date Display */}
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">
                    Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </div>

                {/* Add Button */}
                <button
                  onClick={handleAddEntry}
                  className="w-full px-6 py-4 bg-gradient-to-r from-beechwood-600 to-beechwood-sage-600 text-white rounded-lg font-bold transition-all transform hover:scale-105"
                >
                  Add Entry
                </button>
              </div>
            </div>
          )}

          {/* Existing Entries */}
          <div className="space-y-8">
            {products.map((product) => {
              const entries = blogData[product.slug] || [];
              if (entries.length === 0) return null;

              return (
                <div key={product.slug}>
                  <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-2">
                    <Hash className="w-6 h-6 text-beechwood-sage" />
                    {product.name}
                    <span className="text-gray-500 text-sm font-normal">
                      ({entries.length} {entries.length === 1 ? 'entry' : 'entries'})
                    </span>
                  </h2>

                  <div className="space-y-4">
                    {entries.map((entry, index) => (
                      <div
                        key={index}
                        className="bg-[#0a0a1f]/50 backdrop-blur-sm border border-beechwood-main/30 rounded-xl p-6 hover:border-beechwood-main/50 transition-all"
                      >
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="text-lg font-bold text-white flex-1">
                            {entry.title}
                          </h3>
                          <button
                            onClick={() => handleDelete(product.slug, index)}
                            className="text-red-400 hover:text-red-300 transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                        <p className="text-gray-400 mb-3 leading-relaxed">
                          {entry.content}
                        </p>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          {new Date(entry.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {Object.keys(blogData).length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No blog entries yet. Click "Add New Entry" to get started!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-beechwood-main/20 py-12 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 text-sm">
            Blog entries are stored in browser localStorage. Use "Export to Code" to save permanently.
          </p>
        </div>
      </footer>
    </div>
  );
}
