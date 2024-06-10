-- AlterTable
ALTER TABLE `Post` ADD COLUMN `userId` INTEGER NULL AFTER `categoryId`;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
