// Are you a file extension master? Let's find out by checking if Bill's files are images or audio files. Please use regex if available natively for your language.

// You will create 2 string methods:

// @isAudio/@is_audio:
//  matching 1 or + uppercase/lowercase letter(s) (combination possible), with the extension .mp3, .flac, .alac, or .aac.

// @isImage/@is_image:
//  matching 1 or + uppercase/lowercase letter(s) (combination possible), with the extension .jpg, .jpeg, .png, .bmp, or .gif.

// Note that this is not a generic image/audio files checker. It's meant to be a test for Bill's files only. Bill doesn't like punctuation. He doesn't like numbers, neither. Thus, his filenames are letter-only

// Rules:

// It should return true or false, simply.
// File extensions should consist of lowercase letters and numbers only.
// File names should consist of letters only (uppercase, lowercase, or both)

function validateString(str, validExt) {
    const ext = str.slice(str.lastIndexOf('.'))
    const filename = str.slice(0, str.indexOf(ext))
    let ans;

    validExt.filter( x => ext === x ? ans = true : null)

    if( filename.match(/\s/) || filename.match(/[^a-zA-Z]/g)){
        ans = false
    }
    
    return ans || false
}

String.prototype.isAudio= function(){
    const extensions = ['.mp3', '.flac', '.alac', '.aac']
    return validateString(this, extensions)
  };

  String.prototype.isImage= function(){
    const extensions = ['.jpg', '.jpeg', '.png', '.bmp', '.gif']
    return validateString(this, extensions)
  };

// Test
//   console.log("DaftPunk.FLAC".isAudio())
//   console.log("NothingElseMatters.mp3".isAudio())
//   console.log("Nothing Else Matters.mp3".isAudio())
//   console.log(" Amon Tobin.alac".isAudio())