'use client';
import React, { useState } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post?.likes?.length || 0);

  if (!post) return null;

  const author = post.author || {};
  const comments = post.comments || [];

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="card border-0 shadow-sm rounded-4 p-3 bg-white">
      {/* Author header */}
      <div className="d-flex align-items-center gap-2 mb-2">
        <div
          className="rounded-circle text-white fw-bold d-flex align-items-center justify-content-center flex-shrink-0"
          style={{ width: 40, height: 40, backgroundColor: '#8C533C' }}
        >
          {author.name ? author.name.charAt(0).toUpperCase() : '?'}
        </div>
        <div>
          <h6 className="fw-bold mb-0 small">{author.name || 'Unknown User'}</h6>
          <small className="text-muted" style={{ fontSize: '0.75rem' }}>
            {author.role || 'Member'}
          </small>
        </div>
      </div>

      {/* Post content */}
      {post.content && (
        <p className="mb-2" style={{ whiteSpace: 'pre-wrap' }}>
          {post.content}
        </p>
      )}

      {/* Post image */}
      {post.image && (
        <div className="rounded-3 overflow-hidden mb-2">
          <img
            src={post.image}
            alt="Post attachment"
            className="w-100"
            style={{ maxHeight: '420px', objectFit: 'cover' }}
          />
        </div>
      )}

      {/* Actions */}
      <div className="d-flex align-items-center gap-3 pt-2 border-top mt-1">
        <button
          onClick={handleLike}
          className="btn btn-sm d-flex align-items-center gap-1 border-0 bg-transparent px-2"
          style={{ color: liked ? '#8C533C' : '#6c757d' }}
        >
          <Heart size={16} fill={liked ? 'currentColor' : 'none'} />
          <span className="small fw-semibold">{likeCount}</span>
        </button>

        <button className="btn btn-sm d-flex align-items-center gap-1 border-0 bg-transparent px-2 text-secondary">
          <MessageCircle size={16} />
          <span className="small fw-semibold">{comments.length}</span>
        </button>

        <button className="btn btn-sm d-flex align-items-center gap-1 border-0 bg-transparent px-2 text-secondary ms-auto">
          <Share2 size={16} />
        </button>
      </div>
    </div>
  );
}