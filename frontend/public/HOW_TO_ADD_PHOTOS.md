# 📸 How to Add Your Photos (Profile & Projects)

Unga photo and project photos add panna **2 easy methods** irukku:

---

## 1. Unga Profile Photo Add Panna:

### Option A: Local File Vazhiya (Romba Simple)
- Ungaloda passport size or professional photo-ai copy pannikonga.
- Andha photo name-ai **`profile.jpg`** nu vechikonga.
- Andha file-ai seedha indha folder-kulla podunga:
  👉 `c:\Users\sanja\Desktop\PorfolioWebsite\frontend\public\profile.jpg`
- Website automatically unga photo-ai render pannidum!

### Option B: Online Link / URL Vazhiya
- Unga photo-ai Google Drive, Imgur, Cloudinary, or LinkedIn/GitHub-la upload panni direct link copy pannikonga.
- `frontend/src/data/portfolioData.ts` file open panni:
  ```typescript
  export const PERSONAL_INFO = {
    // ...
    avatarUrl: "https://your-image-link-here.jpg",
  };
  ```
  nu paste panna podhum!

---

## 2. Unga Projects Photos Add Panna:

1. Unga projects screenshots or architecture diagrams-ai indha folder-kulla podunga:
   👉 `frontend/public/projects/`
   - `ai-recommendation.png`
   - `sign-language.png`
   - `n8n-automation.png`
   - `student-system.png`
   - `portfolio.png`

2. Or, direct image URL-ai `portfolioData.ts` file-la `imageUrl: "https://..."` nu kudukalaam!
